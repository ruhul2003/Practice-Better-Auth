'use client';
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { object } from "better-auth";

// Submit handler
const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    // const formData = new FormData(e.currentTarget);
    // const data = {};

    // // Convert FormData to plain object
    // formData.forEach((value, key) => {
    //     data[key] = value.toString();
    // });

    // console.log(data);
};

// Component
const SignUpPage = () => {
    return (
        <div>
            <h1>Please sign up</h1>

            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                {/* Name Field */}
                <TextField
                    isRequired
                    name="name"
                    type="text"
                    validate={(value) => {
                        if (value.trim().length < 3) {
                            return "Name must be at least 3 characters";
                        }

                        if (!/^[A-Za-z\s]+$/.test(value)) {
                            return "Name can only contain letters";
                        }

                        return null;
                    }}
                >
                    <Label>Name</Label>

                    <Input placeholder="Enter your name" />

                    <FieldError />
                </TextField>

                    {/* Email Field */}

                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                        ) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                {/* Password Field */}
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }

                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }

                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>

                    <Input placeholder="Enter your password" />

                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>

                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>

                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default SignUpPage;