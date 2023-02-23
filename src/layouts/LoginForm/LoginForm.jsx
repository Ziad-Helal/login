import { useState } from "react";
import { Link } from "react-router-dom";
import { InputField, Button } from "../../components";
import { useUserAPI } from "../../context";

export default function LoginForm() {
    const { login } = useUserAPI();

    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");

    const emailChangeHandler = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        event.preventDefault();
        setPassowrd(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        login({ email: email, password: password });
    };

    return (
        <form
            onSubmit={submitHandler}
            className="bg-white border border-secondary_3_o rounded-xl text-center w-4/5 max-w-xl py-16"
        >
            <fieldset>
                <legend>
                    <h1 className="text-primary_1 text-5xl font-semibold mb-12">LOGIN</h1>
                </legend>
                <InputField
                    type="email"
                    label="Email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email here"
                    autoFocus
                    required
                    onChange={emailChangeHandler}
                />
                <InputField
                    type="password"
                    label="Password"
                    id="password"
                    name="password"
                    placeholder="Please Enter Your Password here"
                    required
                    onChange={passwordChangeHandler}
                />
                <Button type="submit" className="my-12">
                    Login
                </Button>
                <p className="text-xs font-light">
                    If you havn't Registered yet?{" "}
                    <Link to={"/login/reg"} className="text-primary_1 underline">
                        Register Now
                    </Link>
                </p>
            </fieldset>
        </form>
    );
}
