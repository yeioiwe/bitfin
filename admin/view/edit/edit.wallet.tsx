import { Wallet } from '@/config/api/api.schemas';
import { Wallet as WalletZod } from '@/config/api/api.zod';
import { useUserEditWallet, useUserWallet } from '@/config/api/user/user';
import { Col } from '@/config/boxes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, OutlinedInput, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const EditWallet = ({ id }: { id: number }) => {
    const { data: wallet } = useUserWallet(id);
    const { reset, register, getValues, handleSubmit } = useForm<Wallet>({ resolver: zodResolver(WalletZod) });

    useEffect(() => {
        if (wallet) reset({ ...wallet });
    }, [wallet]);

    const { mutate } = useUserEditWallet();

    const handleEdit = () => {
        mutate({ data: getValues() }, { onSuccess: () => console.log('okey') });
    };

    return (
        <Col gap={2}>
            <Typography fontWeight={700}>Кошелек</Typography>
            <form onSubmit={handleSubmit(handleEdit)}>
                <Col gap={2}>
                    <Col>
                        <Typography fontWeight={700}>USDT</Typography>
                        <OutlinedInput type="number" {...register('USDT')} />
                    </Col>

                    <Col>
                        <Typography fontWeight={700}>BTC</Typography>
                        <OutlinedInput type="number" {...register('BTC')} />
                    </Col>

                    <Col>
                        <Typography fontWeight={700}>XRP</Typography>
                        <OutlinedInput type="number" {...register('XRP')} />
                    </Col>

                    <Col>
                        <Typography fontWeight={700}>BNB</Typography>
                        <OutlinedInput type="number" {...register('BNB')} />
                    </Col>

                    <Col>
                        <Typography fontWeight={700}>DOGE</Typography>
                        <OutlinedInput type="number" {...register('DOGE')} />
                    </Col>

                    <Col>
                        <Typography fontWeight={700}>SOL</Typography>
                        <OutlinedInput type="number" {...register('SOL')} />
                    </Col>

                    <Button type="submit" variant="contained">
                        Редактировать
                    </Button>
                </Col>
            </form>
        </Col>
    );
};
