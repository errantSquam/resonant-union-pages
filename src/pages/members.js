import { useState, useEffect } from "react";
import { members } from "../const/memberInfo";
import { JrpgGradientBoxVariant } from "../components/jrpgbox"
import { HeaderText } from "../components/headerText";

const MemberCard = ({ member }) => {
    return <div className="flex group odd:flex-row-reverse even:flex-row mx-4 xl:mx-[16rem]">
        <img className="w-1/4 object-cover rounded-md border border-2 border-white" src={member.picture} alt="member-profile-pic" />
        <div className="w-3/4 text-2xl font-pixelify text-white flex flex-col group-odd:items-end">
            <div className="w-fit">
                <JrpgGradientBoxVariant color={member.color}>
                    <a className="text-4xl cursor-pointer decoration-dotted underline" href={member.link} target="_blank">{member.name}</a>
                </JrpgGradientBoxVariant>
            </div>

            <JrpgGradientBoxVariant color={member.color}>
                <div className="flex flex-col items-start justify-evenly min-h-[16rem] ">
                    {member.desc?.split('|').map((paragraph, index) => {
                        return <div className="text-xl" key={index}>{paragraph}</div>
                    })}
                    <div>{member.note ? member.note : ""}</div>
                </div>
            </JrpgGradientBoxVariant>
        </div>
    </div>
}

const Members = () => {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
    }

    useEffect(() => {
        handleLoad()
    }, [])

    return <div className="w-full">
        <div className="flex flex-col justify-items items-center space-y-8">
            <HeaderText text={"MEMBERS"} isLoaded={loaded}/>
            <div className="flex flex-col justify-center items-center space-y-8">
                {
                    members.map((member, index) => {
                        return <MemberCard member={member} key={index} />
                    })
                }
            </div>

        </div>
    </div>
}

export default Members