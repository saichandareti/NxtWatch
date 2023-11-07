import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'
import {BiListPlus} from 'react-icons/bi'
import {
  SidebarCon,
  UpperCon,
  LowerCon,
  OptionCon,
  Option,
  EndPara,
} from './styledComponents'

const SideBar = () => {
  let k
  return (
    <SidebarCon>
      <UpperCon>
        <OptionCon>
          <AiFillHome />
          <Option>Home</Option>
        </OptionCon>
        <OptionCon>
          <AiFillFire />
          <Option>Trending</Option>
        </OptionCon>
        <OptionCon>
          <IoLogoGameControllerB />
          <Option>Gaming</Option>
        </OptionCon>
        <OptionCon>
          <BiListPlus />
          <Option>Saved</Option>
        </OptionCon>
      </UpperCon>
      <LowerCon>
        <Option contact>Contact Us</Option>
        <EndPara>Enjoy! Now to see your channels and recommendations!</EndPara>
      </LowerCon>
    </SidebarCon>
  )
}
export default SideBar
