import { useForm } from "react-hook-form";
import { useState } from "react";

function Validation() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    console.log("Formulario válido:", data);
  };

  const password = watch("password");

  return (
    <div style={{ width: "350px", margin: "20px auto" }}>
      <h2>Formulario</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* NOMBRE */}
        <label>Nombre: </label>
        <input type="text"
          {...register("nombre", {
            required: "El nombre es obligatorio",
            minLength: { value: 2, message: "Mínimo 2 caracteres" }
          })}
        />
        <hr></hr>
        <br></br>
        {errors.nombre && <p style={{ color: "red" }}>{errors.nombre.message}</p>}

        {/* EMAIL */}
        <label>Email :</label>
        <input type="email"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
              message: "Formato de email inválido"
            }
          })}
        />
        <hr></hr>
        <br></br>
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        {/* PASSWORD */}
        <label>Password :</label>
        <input
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "El password es obligatorio",
            minLength: { value: 6, message: "Mínimo 6 caracteres" }
          })}
        />
        <button
          type="button" className="btn btn-success"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Ocultar" : "Mostrar"}
        </button>
        <hr></hr>
        <br></br>
        
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

        {/* CONFIRM PASSWORD */}
        <label>Confirm Password:</label>
        <input
          type={showPassword ? "text" : "password"}
          {...register("confirmPassword", {
            required: "Debe confirmar el password",
            validate: value =>
              value === password || "Las contraseñas no coinciden"
          })}
        />
        <hr></hr>
        <br></br>
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
        )}

        {/* EDAD */}
        <label>Edad :</label>
        <input
          type="number"
          {...register("edad", {
            required: "La edad es obligatoria",
            min: { value: 18, message: "Debe ser mayor de 18" },
            max: { value: 99, message: "Debe ser menor de 99" }
          })}
        />
        <hr></hr>
        <br></br>
        {errors.edad && <p style={{ color: "red" }}>{errors.edad.message}</p>}

        {/* SELECT */}
        <label>País: </label>
        <select
          {...register("pais", { required: "Debe seleccionar un país" })}
        >
          <option value="">Seleccione...</option>
          <option value="bo">Bolivia</option>
          <option value="mx">México</option>
          <option value="ar">Argentina</option>
        </select>
        <hr></hr>
        <br></br>
        {errors.pais && <p style={{ color: "red" }}>{errors.pais.message}</p>}

        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
    </div>
  );
}

export default Validation;
