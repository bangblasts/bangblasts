import { Button, Image } from "@nextui-org/react";
import { GREY_GRADIENT, YELLOW_GRADIENT, YELLOW_GRADIENT_2 } from "../../components/styleClassNames";
import { EnterEmailModal } from "../../components";
import { useContext } from "react";
import { AppContext } from "../../context";
import { IMAGES } from "../../assets/Images";


import './Main.scss';

export const Main = () => {
    const { isEmailModalOpen, openEmailModal, changeEmailModalState } = useContext(AppContext);
    return (
        <div className="flex flex-col pl-[150px] pr-[150px] ">
            <EnterEmailModal isOpen={isEmailModalOpen!} onOpenChange={changeEmailModalState!} />
            <div className={'flex mt-[60px] justify-between'}>
                <div className={'w- flex flex-col justify-between mt-[71px] items-between'}>
                    <div className={'text-[#FFF] flex flex-col text-[56px] leading-[54px] font-medium  '}>
                        Explore our exciting games
                        <div className={'text-[#92939A] text-[16px] font-light leading-[24px] mt-[16px]'}>
                            Play classic poker and lottery using Bang Blasts chips
                        </div>
                        <div className={'text-[#92939A] text-[16px] font-light leading-[24px] mt-[16px]'}>
                            Our platform issues NFTs that can be used as payment within games<br />
                            Each chip equals <span className={'text-[#C841E4] font-medium'}>1 Blast token</span>
                        </div>
                        <div className={'mt-[32px] w-[272px] h-[72px] text-[#C841E4] text-[16px] font-light leading-[24px] pt-[24px] pl-[56px] border-[1px] border-[#2F7DFF]/25 rounded-tl-[16px] rounded-br-[16px]'}>
                            Coming in May 2024
                        </div >
                    </div>
                </div>
                <div>
                    <Image src={IMAGES.monke} />
                </div>

            </div>
            <div className={'flex mt-[150px]'}>
                <div className="flex gap-[24px]">
                    <div className={'text-[48px] leading-[56px] font-medium'}>
                        How to purchase Bang Blast chips
                        <div className={'text-[#ABAAB4] text-[16px] leading-[24px] font-light mt-[24px]'}>
                            The website will feature an exchange bureau where you can trade chips Initially, chips can be bought with tokens. With Blast tokens, an NFT will be created for you, specifying the balance equal to the number of Blast tokens. If you prefer to buy chips with Ethereum or BNB, the conversion will be based on the market rate
                        </div>
                    </div>
                    <div className={'flex mt-[40px] gap-[24px]'}>
                        <div className={'flex flex-col mt-[32px] w-[170px] h-[182px] text-[#C841E4] text-[16px] font-light leading-[24px] pt-[16px] pl-[29px] pr-[29px] border-[1px] border-[#884CBE]/25 rounded-tl-[16px] rounded-br-[16px]'}>
                            <Image src={IMAGES.blast} />
                            <div className={YELLOW_GRADIENT + ' mt-[16px] self-center text-[16px] leading-[24px] font-medium tracking-wider'}>
                                Blast
                            </div>
                        </div >
                        <div className={'flex flex-col mt-[32px] w-[170px] h-[182px] text-[#C841E4] text-[16px] font-light leading-[24px] pt-[16px] pl-[29px] pr-[29px] border-[1px] border-[#884CBE]/25 rounded-tl-[16px] rounded-br-[16px]'}>
                            <Image src={IMAGES.bnb} />
                            <div className={YELLOW_GRADIENT_2 + ' mt-[16px] self-center text-[16px] leading-[24px] font-medium tracking-wider'}>
                                BNB
                            </div>
                        </div >
                        <div className={'flex flex-col mt-[32px] w-[170px] h-[182px] text-[#C841E4] text-[16px] font-light leading-[24px] pt-[16px] pl-[29px] pr-[29px] border-[1px] border-[#884CBE]/25 rounded-tl-[16px] rounded-br-[16px]'}>
                            <Image src={IMAGES.eth} />
                            <div className={GREY_GRADIENT + ' mt-[16px] self-center text-[16px] leading-[24px] font-medium tracking-wider'}>
                                BNB
                            </div>
                        </div >

                    </div>
                </div>
            </div>
            <div className={'mt-[150px] flex gap-[56px]'}>
                <div className={''}>
                    <Image src={IMAGES.pc} />
                </div>
                <div className={'flex flex-col gap-[14px]'}>
                    <div className={'text-[48px] leading-[56px] font-medium'}>
                        Gaming Room
                    </div>
                    <div className={'text-[16px] leading-[24px] text-[#ABAAB4] font-light'}>
                        Submit your NFT chips here to play our games. After finishing the game, a new NFT will be issued with the updated balance
                    </div>
                </div>
            </div>

            <div className={'mt-[150px] flex gap-[84px]'}>
                <div className={'flex flex-col gap-[14px] justify-center max-w-[560px]'}>
                    <div className={'text-[48px] leading-[56px] font-medium'}>
                        Reception Room (Exit)
                    </div>
                    <div className={'text-[16px] leading-[24px] text-[#ABAAB4] font-light'}>
                        Exchange your chips for real money. You can also exchange your chips for Blast tokens, BNB, and Ethereum. Over time and based on player requests, we will expand the game pool and available tokens for deposit and withdrawal                    </div>
                </div>
                <div className={''}>
                    <Image src={IMAGES.money} />
                </div>
            </div>


            <div className={'mt-[150px] flex flex-col gap-[32px]'}>
                <div className={'flex text-[48px] self-center leading-[56px] font-medium'}>
                    Why choose Bang Blasts?
                </div>
                <div className={'flex gap-[24px]'}>
                    <div className={'flex flex-col w-[364px] h-[96px] text-[#FFF] text-[16px] font-light leading-[24px] p-[24px] border-[1px] border-[#884CBE]/25 rounded-tl-[16px] rounded-br-[16px]'}>
                        100% transparent algorithms and clear rules that everyone can personally review
                    </div >
                    <div className={'flex flex-col w-[364px] h-[96px] text-[#FFF] text-[16px] font-light leading-[24px] p-[24px] border-[1px] border-[#884CBE]/25 rounded-tl-[16px] rounded-br-[16px]'}>
                        A system where the platform cannot freeze your assets
                    </div >
                    <div className={'flex flex-col w-[364px] h-[96px] text-[#FFF] text-[16px] font-light leading-[24px] p-[24px] border-[1px] border-[#884CBE]/25 rounded-tl-[16px] rounded-br-[16px]'}>
                        An expanding game pool based on community requests
                    </div >
                </div>
            </div>


            <div className={'mt-[150px] flex flex-col gap-[24px] items-center'}>
                <div className={'flex justify-center text-center'}>
                    <div className={'text-[48px] leading-[56px] font-medium'}>
                        Subscribe to our updates and get a <span className={'text-[#C841E4]'}>5% bonus</span> on your first deposit in may 2024!
                    </div>
                </div>

                <Button onPress={openEmailModal} className={'min-h-[72px] min-w-[220px] bg-[#C841E4] text-[#000] text-[16px] leading-[24px] rounded-[16px]'}>
                    Send an email
                </Button>
            </div>



        </div >
    );
}