import bcrypt from "bcrypt";
import { con } from "../connection/db.js";

export const Login = async (req, res) => {

    const { email, password } = req.body;

    const [sesion] = await con.query("SELECT * FROM usuarios WHERE email = ?", [
        email,
    ]);

    if (sesion.length === 0) {
        return res.status(401).send("Usuario no encontrado");
    }

    const contrasenaValida = await bcrypt.compare(password, sesion[0].password);

    console.log(typeof(sesion[0].password));
    console.log(typeof(password));

    console.log(contrasenaValida);

    if (!contrasenaValida) {
        return res.status(401).send("Usuario o contraseña incorrecto");
    }

    res.send("Success");
};
