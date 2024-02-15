import { Modal, ModalContent, ModalBody, Button, Input } from "@nextui-org/react"
import { useEffect, useState } from "react";

export const EnterEmailModal = ({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: (isOpen: boolean) => void }) => {

    const [email, setEmail] = useState('');

    useEffect(() => {
        if (isOpen === false) {
            setEmail('')
        }

    }, [isOpen]);
    return (
        <Modal classNames={{ backdrop: 'w-[100%]', wrapper: 'w-[100%]' }} size={'3xl'} backdrop={'transparent'} isOpen={isOpen} onOpenChange={onOpenChange} className={'bg-[#0a0b21] text-white p-5'}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalBody className={'flex flex-row justify-between'}>
                            <div className="flex w-7/12 flex-col gap-6 text-3xl font-extrabold" >Enter your email

                                <Input
                                    className={'flex w-full '}
                                    variant="bordered"
                                    isRequired placeholder="Enter your email" label="Email"
                                    inputMode={'email'} type={'email'} value={email} onValueChange={setEmail}
                                />
                                <Button onPress={onClose} className={' bg-[#C841E4] text-white  min-w-[129px] min-h-[56px] mt-[28px] text-[16px] leading-[24px] rounded-[16px]'}>
                                    Subscribe
                                </Button>

                            </div>

                        </ModalBody>

                    </>
                )}
            </ModalContent>
        </Modal>
    )
}