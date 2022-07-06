import IcomoonReact , {iconList , IconProps} from "react-icomoon";
import IcoMoon  from "react-icomoon";
const iconSet = require('./selection.json');

export const Icon = (props: IconProps) => {
    return <IcoMoon iconSet={iconSet} {...props} />

}
