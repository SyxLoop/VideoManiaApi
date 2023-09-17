import { con } from "../connection/db.js";
import bcrypt from 'bcrypt';

function calcularFechaRegistro() {
    /*
     * Funcion para calcular la fecha de registro del usuario
     */
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    const fechaRegistro = `${anio}-${mes}-${dia} ${hora}:${minutos}:${segundos}`;
    return fechaRegistro;
}

export const createUsuarios = async (req, res) => {
    /*
     * Crea un nuevo usuario usando el metodo POST
     */

    const { nombre, apellido, email, password, telefono } = req.body;
    const fechaRegistro = calcularFechaRegistro();

    const hashedPassword = await bcrypt.hash(password, 10);

    const [rows] = await con.query(
        "INSERT INTO usuarios (nombre, apellido, email, password, telefono, fecha_registro) VALUES (?,?,?,?,?,?);",
        [nombre, apellido, email, hashedPassword, telefono, fechaRegistro]
    );
    res.send({
        id: rows.insertId,
        nombre,
        apellido,
        email,
        hashedPassword: hashedPassword,
        telefono,
        fecha_registro: fechaRegistro,
    });
};

/*
 * Obtiene la lista de usuarios usando el metodo GET
 */
export const getUsuarios = async (req, res) => {
    const [usuarios] = await con.query("SELECT * FROM usuarios;");
    res.json(usuarios);
};

/*
 * Obtiene a un  usuario por medio de la ID
 */
export const getUsuariosByID = async (req, res) => {
    const { id } = req.params;
    const [usuarios] = await con.query(
        "SELECT * FROM usuarios WHERE id_usuarios = ?;",
        [id]
    );
    res.json(usuarios);
};

/*
 * Actualiza un usuario con el metodo PUT
 */
export const updateUsuarios = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, email, password, telefono } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const [resultado] = await con.query(
        "UPDATE usuarios SET nombre = ?, apellido = ?, email = ?, password = ?, telefono = ? WHERE id_usuarios= ?",
        [nombre, apellido, email, hashedPassword, telefono, id]
    );

    console.log(resultado);

    if (resultado.affectedRows === 0)
        return res.status(404).json({ message: "Usuario no encontrado" });

    const [usuario] = await con.query(
        "SELECT * FROM usuarios WHERE id_usuarios = ?;",
        [id]
    );

    res.json(usuario);
};

/*
 * Elimina a un usuario encontrado mediante una ID usando el metodo DELETE
 */
export const deleteUsuarios = async (req, res) => {
    const { id } = req.params;
    const [resultado] = await con.query(
        "DELETE FROM usuarios WHERE id_usuarios = ?",
        [id]
    );

    if (resultado.affectedRows <= 0)
        return res.status(404).json({ message: "Usuario no encontrado" });

    res.sendStatus(204);
};
