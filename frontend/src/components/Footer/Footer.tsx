import { Button } from '@nextui-org/react';
import BridgeLogo from '../../assets/logo.svg';
import { useContext } from 'react';
import { AppContext } from '../../context';

export const Footer = () => {
    const { openEmailModal } = useContext(AppContext);

    return <div className={'flex flex-col max-h-[56px] w-full max-w-[1440px] bg-[#0E0B28] justify-self-center p-[150px] pb-[16px] pt-[10px]'}>
        <div className={'flex'}>
            <img src={BridgeLogo} alt="bridge logo" className="h-9" />
            <p className={" text-[24px] leading-[32px] text-[#FFF] font-medium pl-[10px]"}>Bang Blasts</p>

            <div className={'flex gap-[40px] ml-[110px]'}>
                <div className={' self-center text-[#ABAAB4] text-[14px] leading-[20px] font-light'}>
                    Bang Blasts chips
                </div>
                <div className={' self-center text-[#ABAAB4] text-[14px] leading-[20px] font-light'}>
                    Gaming Room
                </div>
                <div className={' self-center text-[#ABAAB4] text-[14px] leading-[20px] font-light'}>
                    Reception Room
                </div>
                <div className={' self-center text-[#ABAAB4] text-[14px] leading-[20px] font-light'}>
                    Why choose
                </div>

            </div>

            <Button onClick={openEmailModal} className={'bg-[#C841E4] ml-auto min-w-[143px] max-h-[36px] text-[#FFF] text-[14px] leading-[20px] rounded-[16px]'}>
                Send an email
            </Button>

        </div>

    </div>
}