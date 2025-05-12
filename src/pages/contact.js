import { useState, useEffect } from "react";
import { HeaderText } from "../components/headerText";
import { useForm, Controller } from "react-hook-form";
import { FormInput, FormInputArea } from "../components/formInput";

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

    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-8">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 gap-x-4 w-full justify-evenly">
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => <FormInput label={"First Name"} field={field}/>}
            />
            <Controller
                name="lastName"
                control={control}
                render={({ field }) => <FormInput label={"Last Name"} field={field}/>}
            />
        </div><Controller
            name="email"
            control={control}
            render={({ field }) => <FormInput label={"Email"} field={field}/>}
        />
        <Controller
            name="subject"
            control={control}
            render={({ field }) => <FormInput label={"Subject"} field={field}/>}
        />
        <Controller
            name="message"
            control={control}
            render={({ field }) => <FormInputArea label={"Message"} field={field}/>}
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
            <div className="w-full px-16 lg:px-48">
                <FormComponent />
            </div>
        </div>
    </div>
}

export default Contact