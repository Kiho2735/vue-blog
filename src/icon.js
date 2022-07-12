// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faBarsStaggered,
  faXmark,
  faArrowRight,
  faPenToSquare,
  faTrash,
  faStar,
  faUser,
  faLock,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCheckCircle,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Font Awesome
library.add(faFacebookF);
library.add(faInstagram);

library.add(faBarsStaggered);
library.add(faXmark);
library.add(faArrowRight);
library.add(faPenToSquare);
library.add(faTrash);
library.add(faStar);
library.add(faUser);
library.add(faLock);
library.add(faEnvelope);

library.add(faCheckCircle);
library.add(faCircleXmark);

export default FontAwesomeIcon;
