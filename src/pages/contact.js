import { useState, useEffect } from "react";
import { HeaderText } from "../components/headerText";
import { useForm, Controller, Form } from "react-hook-form";

const FormComponent = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        }
    });

    const onSubmit = data => console.log(data); //TODO

    return <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
            name="firstName"
            control={control}
            render={({ field }) => <input {...field} />}
        />
        <Controller
            name="lastName"
            control={control}
            render={({ field }) => <input {...field} />}
        />
        <Controller
            name="email"
            control={control}
            render={({ field }) => <input {...field} />}
        />
        <Controller
            name="subject"
            control={control}
            render={({ field }) => <input {...field} />}
        />
        <Controller
            name="message"
            control={control}
            render={({ field }) => <input {...field} />}
        />
        <input type="submit" />
    </form>
}

const Contact = () => {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
    }

    useEffect(() => {
        handleLoad()
    }, [])

    return <div className="w-full">
        <div className="flex flex-col justify-items items-center space-y-8">
            <HeaderText text={"CONTACT US"} isLoaded={loaded} />
            <FormComponent />
        </div>
    </div>
}

export default Contact