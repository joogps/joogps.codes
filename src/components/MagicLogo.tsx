
interface MagicLogoProps {
    size: string;
    className?: string;
  }

const MagicLogo: React.FC<MagicLogoProps> = ({ size, className }) => {
    return (
        <svg className={className} width={size} height={size} viewBox="0 0 114.337224 120.124028" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.0855116,0.0634719123 L50.2579027,0.0636637019 C53.7334136,0.155560574 51.8242657,5.68028038 49.0366521,13.0970018 L48.1125536,15.5507166 C42.6620026,30.0560409 35.843042,49.8111294 56.8304258,51.8913994 C129.534008,59.0977805 127.739241,120.1875 83.0318489,120.1875 C80.3022451,120.1875 80.8482456,117.995778 81.8343397,114.795863 L82.1754479,113.693508 C84.8947829,104.854464 88.4545578,90.1227238 43.4425816,90.1227238 C-20.8602416,90.1227238 -5.42041937,35.139986 36.7617066,6.832447 C43.7850306,2.11924176 47.907058,0.113766018 50.0855116,0.0634719123 Z" id="Shape"></path>
            </svg>
    );
}

export default MagicLogo;