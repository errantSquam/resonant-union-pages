import { JrpgGradientBoxExpand } from "../components/jrpgbox"

export const FormInput = ({ label, field }) => {
    return <div className="flex flex-col w-full">
        <div className="text-lg lg:text-2xl font-pixelify text-white">{label}:</div>
        <JrpgGradientBoxExpand><input type="search" className="w-full bg-transparent font-pixelify text-white focus:outline-none" {...field} /></JrpgGradientBoxExpand>
    </div>
}

export const FormInputArea = ({ label, field }) => {
    return <div className="flex flex-col w-full">
        <div className="text-lg lg:text-2xl font-pixelify text-white">{label}:</div>
        <JrpgGradientBoxExpand><textarea rows="4" className="w-full bg-transparent font-pixelify text-white focus:outline-none" {...field} /></JrpgGradientBoxExpand>
    </div>
}