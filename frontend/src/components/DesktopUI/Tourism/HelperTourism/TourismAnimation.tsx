import { SVGProps, useEffect, useState } from 'react';

const TourismAnimation = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    document.body.style.overflow = 'hidden';

    const enableScrolling = () => {
      document.body.style.overflow = 'auto';
    };

    const timeout = setTimeout(enableScrolling, 2100);
    return () => {
      clearTimeout(timeout);
      enableScrolling();
    };
  }, []);
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 525 525"
      style={
        {
          enableBackground: 'new 0 0 525 525',
        } as SVGProps<SVGSVGElement>['style']
      }
      xmlSpace="preserve"
      className={isActive ? 'active' : ''}
      width="100%"
      height="90vh"
    >
      <style type="text/css">
        {`
        .st0{fill: transparent; transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;}
        .st1{fill: transparent; transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;}
        .st2{fill: transparent; transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;}
        .st3{fill: transparent; transition: fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s;}

        svg.active .st0 { fill: rgb(67, 114, 157); }
        svg.active .st1 { fill: rgb(183, 53, 57); }
        svg.active .st2 { fill: rgb(100, 168, 108); }
        svg.active .st3 { fill: rgb(200, 200, 200); }
        `}
      </style>
      <g>
        <g>
          <path
            className="st0"
            d="M253.02,416.54h20.42l11.06-24.87c-45.6-121.61-179.65-142.34-179.65-142.34l9.67,42.84
			C173.64,307.73,221.72,345.36,253.02,416.54z"
          ></path>
          <path
            className="st1"
            d="M283.11,326.72l22.11,33.17c17.96-35.93,107.79-69.09,107.79-69.09l8.29-44.22c-1.39-0.02-2.77-0.02-4.15,0
			C388.18,247.07,339.44,258.49,283.11,326.72z"
          ></path>
          <path
            className="st2"
            d="M307.99,416.54h34.39c10.9-24.87,63.72-55.28,63.72-55.28l7.83-40.07h-2.3
			C331.48,354.36,307.99,416.54,307.99,416.54z"
          ></path>
          <path
            className="st2"
            d="M186.38,416.54h36.08c0,0-22.26-66.33-102.41-99.5l4.3,44.22C124.35,361.27,175.48,391.67,186.38,416.54z"
          ></path>
          <path
            className="st0"
            d="M341.45,430.22h-153.9c-0.85,0-1.55,0.69-1.55,1.55v20.54c0,0.85,0.69,1.55,1.55,1.55h153.9
			c0.85,0,1.55-0.69,1.55-1.55v-20.54C343,430.91,342.31,430.22,341.45,430.22z"
          ></path>
          <path
            className="st3"
            d="M433.89,92.67c-0.09-1.35-1.01-2.51-2.3-2.92L261.21,37.03c-0.64-0.2-1.32-0.2-1.96,0.01L93.32,89.69
			c-1.36,0.43-2.29,1.7-2.29,3.13c0,1.81,1.47,3.28,3.28,3.28h7.22c1.83,0,3.3,1.49,3.28,3.32l-1.31,116.6
			c-0.02,1.66,1.22,3.07,2.87,3.28c63.48,8.22,115.11,34.4,153.3,80.99c1.26,1.54,3.56,1.63,4.93,0.18
			c37.63-39.67,88.18-67.41,154.08-81.01c1.52-0.31,2.63-1.65,2.63-3.2V100.61c0-1.81,1.47-3.28,3.28-3.28h6.11
			c1.9,0,3.4-1.61,3.27-3.5L433.89,92.67z M289.1,187.37c0,5.27-4.27,9.55-9.55,9.55h-34.11c-5.27,0-9.55-4.27-9.55-9.55v-48.44
			c0-5.27,4.27-9.55,9.55-9.55h34.11c5.27,0,9.55,4.27,9.55,9.55V187.37z"
          ></path>
        </g>
        <path
          className="st2"
          d="M341.17,464.48h-153.9c-0.85,0-1.55,0.69-1.55,1.55v20.54c0,0.85,0.69,1.55,1.55,1.55h153.9
		c0.85,0,1.55-0.69,1.55-1.55v-20.54C342.72,465.17,342.03,464.48,341.17,464.48z"
        ></path>
      </g>
    </svg>
  );
};

export default TourismAnimation;
