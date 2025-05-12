import { useState, useEffect } from "react";
import { members } from "../const/memberInfo";
import { JrpgGradientBoxVariant } from "../components/jrpgbox"
import { HeaderText } from "../components/headerText";
import { useMediaQuery } from "react-responsive";

const MemberCard = ({ member }) => {
    return <div className="flex group items-center odd:flex-row-reverse even:flex-row mx-4 xl:mx-[16rem]">

        <div className="w-1/4">
            <div className="px-2 mx-4 flex flex-col items-center">
                <img className="aspect-square mx-4 object-cover rounded-md border border-2 border-white" src={member.picture} alt="member-profile-pic" />
                <div className="w-fit my-2 font-pixelify text-white flex flex-col group-odd:items-end">
                    <JrpgGradientBoxVariant color={member.color}>
                        <a className="text-xl w-full cursor-pointer decoration-dotted underline" href={member.link} target="_blank">{member.name}</a>
                    </JrpgGradientBoxVariant>
                </div>
            </div>
        </div>
        <div className="w-3/4 text-2xl font-pixelify text-white flex flex-col group-odd:items-end">


            <JrpgGradientBoxVariant color={member.color}>
                <div className="flex flex-col items-start justify-evenly min-h-[16rem] space-y-8">
                    {member.desc?.split('|').map((paragraph, index) => {
                        return <div className="text-xl" key={index}>{paragraph}</div>
                    })}
                    <div className="text-sm">{member.note ? "Note: " + member.note : ""}</div>
                </div>
            </JrpgGradientBoxVariant>
        </div>
    </div>
}

const MemberCardMobile = ({ member }) => {
    return <div className="flex group items-center odd:flex-row-reverse even:flex-row mx-4 xl:mx-[16rem]">


        <div className="text-2xl font-pixelify text-white flex flex-col items-center">
            <div className="flex flex-row my-4 items-center">
                <img className="w-1/4 aspect-square mx-4 object-cover rounded-md border border-2 border-white" src={member.picture} alt="member-profile-pic" />

                <div className="w-full my-2 font-pixelify text-white flex flex-col text-center">
                    <JrpgGradientBoxVariant color={member.color}>
                        <a className="text-xl w-full cursor-pointer decoration-dotted underline" href={member.link} target="_blank">{member.name}</a>
                    </JrpgGradientBoxVariant>
                </div>
            </div>
            <JrpgGradientBoxVariant color={member.color}>
                <div className="flex flex-col items-start justify-evenly min-h-[16rem] space-y-8">
                    {member.desc?.split('|').map((paragraph, index) => {
                        return <div className="text-xl" key={index}>{paragraph}</div>
                    })}
                    <div className="text-sm">{member.note ? "Note: " + member.note : ""}</div>
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

    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })

    return <div className="w-full">
        <div className="flex flex-col justify-items items-center space-y-8">
            <HeaderText text={"MEMBERS"} isLoaded={loaded} />
            <div className="flex flex-col justify-center items-center space-y-16 lg:space-y-8">
                {
                    members.map((member, index) => {
                        return isMobile ? <MemberCardMobile member={member} key={index} /> : <MemberCard member={member} key={index} />
                    })
                }
            </div>

        </div>
    </div>
}

export default Members