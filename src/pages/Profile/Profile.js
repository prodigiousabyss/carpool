import { LeftPanel } from '../../Components/LeftPanel/leftPanel';
import { RightPanel } from '../../Components/RightPanel/rightPanel';
import dp from './../../Images/dp.jpg';

const personalInfo = {
  name: 'Taylor Swift',
  email: 'taylorswift@gmail.com',
  Rating: '5.0★',
};

export const Profile = () => {
  return (
    <div className="flex justify-center w-full h-full px-4 py-10 overflow-y-auto">
      <LeftPanel />
      <div className="w-[40rem]">
        <div className="rounded-full w-[10rem] h-[10rem] my-4 overflow-hidden">
          <img src={dp} alt="ProfilePicture" className="w-full h-full" />
        </div>
        <div className="font-bold flex px-4 my-1">{personalInfo.name}</div>
        <div className="font-medium flex px-4 my-1">{personalInfo.email}</div>
        <div className="font-medium flex px-4 my-1">{personalInfo.Rating}</div>
        <div></div>
      </div>
      <RightPanel />
    </div>
  );
};
