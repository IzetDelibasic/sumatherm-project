import { MdArrowOutward } from "react-icons/md";
import { projectPlanning , projectTechnology, projectPersonal, projectBuilding } from '@/utils/constants/imagesConstants';


export const servicesLinks = [
    {
      title: 'Sumatherm Industrial Plant Construction',
      href: '/service1',
      icon: projectTechnology, 
      arrow: MdArrowOutward,
      text: 'Welding and Testing technology, Manufacturing, Chemistry & Petrochemistry, Rnergy systems and Power plants, Pharma & Food.',
    },
    {
      title: 'Sumatherm Building Technology Services',
      href: '/service2',
      icon: projectBuilding, 
      arrow: MdArrowOutward, 
      text: 'Electrical engineering, Heating, Sanitary, Ventilation,  Strong and weak current, Security, Fire Alarm Systems, IT networks, SmartHome, PV Systems, Cellular networks',
    },
    {
      title: 'Sumatherm Personal',
      href: '/service3',
      icon: projectPersonal, 
      arrow: MdArrowOutward,
      text: 'Personal services',
    },
    {
      title: 'Sumatherm Technology',
      href: '/service4',
      icon: projectPlanning, 
      arrow: MdArrowOutward,
      text: 'Production of EMC line filters for household appliances and industrial systems, digital electronics. We produce everything in this domain at the customers request.',
    },
  ];
  