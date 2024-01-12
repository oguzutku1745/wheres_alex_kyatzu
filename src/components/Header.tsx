import { useDisconnect, shortenAddress, useAccount } from '@puzzlehq/sdk';
import Button from './Button';
import { useGameStore } from '@state/gameStore';
import { useNavigate } from 'react-router-dom';

export const AppHeader = () => {
  const { account } = useAccount();
  const { disconnect, loading } = useDisconnect();
  const navigate = useNavigate();

  return (
    <div className='flex w-full items-stretch justify-between gap-5  p-4'>
      {account && account.address ? (
        <>
          <button
            onClick={() => {
              useGameStore.getState().clearFlowStores();
              navigate('/');
            }}
          >
            <img
              loading='lazy'
              src='https://i.imgur.com/tJS3OEG.png'
              className='aspect-[10] w-[300px] self-stretch fill-white object-cover object-center'
            />
          </button>
          <Button
            size='sm'
            color='white'
            className='w-fit'
            onClick={disconnect}
            disabled={loading}
          >
            {shortenAddress(account.address)}
          </Button>
        </>
      ) : (
        <div className='w-full self-stretch' />
      )}
    </div>
  );
};
