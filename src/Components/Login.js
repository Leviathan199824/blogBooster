import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Validar email
        const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setError("Email inválido");
            return;
        }

        // Validar password: min 8, mayus, minus, num, especial
        const passRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
        if (!passRegex.test(password)) {
            setError(
                "Password inválido: mínimo 8 caracteres, al menos mayúscula, minúscula, número y carácter especial"
            );
            return;
        }

        // Asignar rol según email de prueba
        let role = "normal";
        if (email === "admin@demo.com") {
            role = "admin";
        }

        localStorage.setItem("role", role);
        setError("");

        // Redirigir según rol
        if (role === "admin") navigate("/admin");
        else navigate("/user");
    };

    return (
        <div className="center">
            <section id="content">
                <h2>Login</h2>
                <div>
                    <form className="mid-form" onSubmit={handleLogin}>
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@demo.com"
                        />
                        <br />

                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Min 8 caracteres"
                        />

                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <center>
                            <button type="submit" name="submit" value="Buscar" className="btn btn-success">Login</button>
                        </center>
                    </form>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <p>Prueba con:</p>
                    <p><b>Admin:</b> admin@demo.com / cualquier password válido</p>
                    <p><b>Usuario:</b> user@demo.com / cualquier password válido</p>
                </div>
            </section>
        </div>
    );
}
