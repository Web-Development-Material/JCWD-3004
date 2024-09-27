import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "../../utils/validation/formSchema";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: FormData) {
    console.log("Form submitted data : ", data);
    if (data) {
      Swal.fire({
        title: "Success",
        text: "Form successfully submitted",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          let token = "abcdefgh12345"; // -> simulasi token yang digenerate dari BE
          Cookies.set("userToken", token, { expires: 1 }); // -> menyimpan token selama 1 hari
          Cookies.set("userName", data.name, { expires: 1 }); // -> menyimpan nama

          // contoh pembuatan session storage
          sessionStorage.setItem("userName", data.name);

          // contoh pembuatan local storage
          localStorage.setItem("userName", data.name);

          if (data.plan === "basic") {
            Cookies.set("userPlan", data.plan, { expires: 7 }); // -> subscription free trial 7 hari
          } else if (data.plan === "premium") {
            Cookies.set("userPlan", data.plan, { expires: 30 }); // -> subscription premium 1 bulan
          }
          navigate("/home");
        }
      });
    }
  }

  return (
    <div className="w-screen bg-white h-full flex flex-col justify-center items-center">
      <div className="p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-black font-bold mb-6">Register Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            {/* input nama menggunakan rhf */}
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              className={`w-full p-2 border border-gray-300 bg-white text-black rounded ${
                errors.name ? "border-red-500" : ""
              }`}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
            {/* input email menggunakan rhf */}
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="text"
              className={`w-full p-2 border border-gray-300 bg-white text-black rounded ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
            {/* input password menggunakan rhf */}
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              className={`w-full p-2 border border-gray-300 bg-white text-black rounded ${
                errors.password ? "border-red-500" : ""
              }`}
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}

            {/* input opsi plan menggunakan rhf */}
            <label className="block text-gray-700 mb-2">Plan Option</label>
            <div className="mb-4 space-x-5">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="basic"
                  className="form-radio text-blue-500"
                  {...register("plan")}
                />
                <span className="ml-2 text-black">Basic</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="premium"
                  className="form-radio text-blue-500"
                  {...register("plan")}
                />
                <span className="ml-2 text-black">Premium</span>
              </label>
              {errors.plan && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.plan.message}
                </p>
              )}
            </div>

            {/* button untuk submit */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-5"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
