import { useState, useEffect } from "react";
import { HeaderText } from "../components/headerText";
import { useForm, Controller } from "react-hook-form";
import { FormInput, FormInputArea } from "../components/formInput";
import { JrpgGradientButton } from "../components/jrpgbox";

const FormComponent = () => {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
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
            <div className="flex flex-col w-full">
                <Controller
                    name="firstName"
                    control={control}
                    rules={{
                        required: { value: true, message: "Please enter your first name." },
                        maxLength: { value: 20, message: "Number of characters of first name has exceeded limit." },
                    }}
                    render={({ field }) => <FormInput label={"First Name"} field={field} />}
                />
                {errors.firstName && <p className="px-2 font-pixelify text-white w-full">{errors.firstName.message}</p>}
            </div>
            <div className="flex flex-col w-full">
                <Controller
                    name="lastName"
                    control={control}
                    rules={{
                        required: { value: true, message: "Please enter your last name." },
                        maxLength: { value: 20, message: "Number of characters of last name has exceeded limit." },
                    }}
                    render={({ field }) => <FormInput label={"Last Name"} field={field} />}
                />
                {errors.lastName && <p className="px-2 font-pixelify text-white w-full">{errors.lastName.message}</p>}
            </div>

        </div>
        <div className="flex flex-col w-full">
            <Controller
                name="email"
                control={control}
                rules={{
                    required: { value: true, message: "Please enter your email." },
                    pattern: {
                        value: /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                        message: "Email entered is not valid."
                    }
                }}
                render={({ field }) => <FormInput label={"Email"} field={field} />}
            />
            {errors.email && <p className="px-2 font-pixelify text-white w-full">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col w-full">
            <Controller
                name="subject"
                control={control}
                rules={{
                    required: { value: true, message: "Please enter your email subject." },
                    maxLength: { value: 50, message: "Number of characters of email subject has exceeded limit." },
                }}
                render={({ field }) => <FormInput label={"Subject"} field={field} />}
            />
            {errors.subject && <p className="px-2 font-pixelify text-white w-full">{errors.subject.message}</p>}
        </div>
        <div className="flex flex-col w-full">
            <Controller
                name="message"
                control={control}
                rules={{
                    required: { value: true, message: "Please enter your email message." },
                    maxLength: { value: 500, message: "Number of characters of email message has exceeded limit." },
                }}
                render={({ field }) => <FormInputArea label={"Message"} field={field} />}
            />
            {errors.message && <p className="px-2 font-pixelify text-white w-full">{errors.message.message}</p>}
        </div>
        <div className="w-fit cursor-pointer"><JrpgGradientButton><input className="font-pixelify text-white text-3xl" type="submit" /></JrpgGradientButton></div>
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