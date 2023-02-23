import { useState } from "react";
import { Link } from "react-router-dom";
import { InputField, Button } from "../../components";
import { useUserAPI } from "../../context";

export default function RegisterForm() {
    const { register } = useUserAPI();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");

    const firstNameChangeHandler = (event) => {
        event.preventDefault();
        setFirstName(event.target.value);
    };

    const lastNameChangeHandler = (event) => {
        event.preventDefault();
        setLastName(event.target.value);
    };

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
        register({ first_name: firstName, last_name: lastName, email: email, password: password });
    };

    return (
        <form
            onSubmit={submitHandler}
            className="bg-white border border-secondary_3_o rounded-xl text-center w-4/5 max-w-xl py-16"
        >
            <fieldset>
                <legend>
                    <h1 className="text-primary_1 text-5xl font-semibold mb-12">SIGN-UP</h1>
                </legend>
                <InputField
                    type="text"
                    label="First Name"
                    id="first_name"
                    name="first_name"
                    placeholder="Enter Your First Name"
                    autoComplete="off"
                    autoFocus
                    required
                    onChange={firstNameChangeHandler}
                />
                <InputField
                    type="text"
                    label="Last Name"
                    id="last_name"
                    name="last_name"
                    placeholder="Enter Your Last Name"
                    required
                    onChange={lastNameChangeHandler}
                />
                <InputField
                    type="email"
                    label="Email"
                    id="email"
                    name="email"
                    placeholder="Please Enter Your Email"
                    required
                    onChange={emailChangeHandler}
                />
                <InputField
                    type="password"
                    label="Password"
                    id="password"
                    name="password"
                    placeholder="Please Enter Your Password"
                    required
                    onChange={passwordChangeHandler}
                />
                <Button type="submit" className="my-12">
                    Sign-up
                </Button>
                <p className="text-xs font-light">
                    If you already havn an account?{" "}
                    <Link to={"/login/log"} className="text-primary_1 underline">
                        Login Now
                    </Link>
                </p>
            </fieldset>
        </form>
    );
}
