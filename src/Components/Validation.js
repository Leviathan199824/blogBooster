import { useForm } from "react-hook-form";

function Validation() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Formulario válido:", data);
  };

  const password = watch("password");

  return (
    <div style={{ width: "350px", margin: "20px auto" }}>
      <h2>Formulario</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* NOMBRE */}
        <label>Nombre</label>
        <input
          {...register("nombre", {
            required: "El nombre es obligatorio",
            minLength: { value: 2, message: "Mínimo 2 caracteres" }
          })}
        />
        {errors.nombre && <p style={{ color: "red" }}>{errors.nombre.message}</p>}

        {/* EMAIL */}
        <label>Email</label>
        <input
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
              message: "Formato de email inválido"
            }
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        {/* PASSWORD */}
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "El password es obligatorio",
            minLength: { value: 6, message: "Mínimo 6 caracteres" }
          })}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

        {/* CONFIRM PASSWORD */}
        <label>Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Debe confirmar el password",
            validate: (value) =>
              value === password || "Las contraseñas no coinciden"
          })}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
        )}

        {/* EDAD */}
        <label>Edad</label>
        <input
          type="number"
          {...register("edad", {
            required: "La edad es obligatoria",
            min: { value: 18, message: "Debe ser mayor de 18" },
            max: { value: 99, message: "Debe ser menor de 99" }
          })}
        />
        {errors.edad && <p style={{ color: "red" }}>{errors.edad.message}</p>}

        {/* SELECT */}
        <label>País</label>
        <select
          {...register("pais", { required: "Debe seleccionar un país" })}
        >
          <option value="">Seleccione...</option>
          <option value="bo">Bolivia</option>
          <option value="mx">México</option>
          <option value="ar">Argentina</option>
        </select>
        {errors.pais && <p style={{ color: "red" }}>{errors.pais.message}</p>}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Validation;
