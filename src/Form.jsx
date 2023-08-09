import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onHandleSubmit = (data) => {
    console.log(data);
  };
  const handleOnChange = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  const handleOnChangeNumber = (e) => {
    setPerson({ ...person, age: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3, maxLength: 7 })}
          placeholder="Name"
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Minimum Characters required</p>
        )}
        {errors.name?.type === "maxLength" && (
          <p className="text-danger">Maximum Characters Reached</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true, min: 18 })}
          placeholder="Age"
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
