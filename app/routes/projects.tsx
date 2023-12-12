import { Home, Settings } from '@mui/icons-material';
import { DetailProject } from '~/components/detail-project';

export default function Projects() {
  return (
    <div className="flex items-center">
      <div className="bg-lightGreen h-full w-[100px] flex-col items-center justify-around flex gap-12">
        <div className="mx-auto hover:cursor-pointer">
          <Home sx={{ fontSize: '40px', color: "white" }} />
        </div>
        <div>
          <Settings sx={{ fontSize: '40px', color: "white" }} />
        </div>
      </div>
      <div className="flex flex-col gap-6 h-screen w-screen bg-mainColor">
        <div className="flex flex-row gap-6">
          <DetailProject />
        </div>
      </div>
    </div>
  );
}
