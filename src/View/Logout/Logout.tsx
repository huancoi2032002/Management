import { Link, useNavigate } from "react-router-dom";
import { LogOutIcon } from "../../assets/constrain";
interface LogoutProps {

}

const Logout = (props: LogoutProps) => {
    const logout = useNavigate();
    const handleClick = () => {
        logout('/login')
    }
    return (
        <div className="absolute w-[200px] h-[48px] px-3 rounded-lg flex justify-center items-center bottom-[30px]" onClick={handleClick}>
            <Link to="" className="w-full h-full bg-orange-orange-50 group">
                <div className="flex w-[176px] p-3 items-center gap-2 flex-shrink-0">
                    <LogOutIcon className="group-hover:stroke-orange-orange-500 " />
                    <span className="font-medium text-base leading-[24px] font-nunito text-orange-orange-500">Đăng xuất</span>
                </div>
            </Link>
        </div>
    );
};

export default Logout;