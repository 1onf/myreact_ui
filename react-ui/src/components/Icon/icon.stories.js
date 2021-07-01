import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg"
import { faCommentDots, faFolder, faStickyNote } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  title: "UI 组件/Icon",
  component: Icon
};

export const Default = () => <Icon icon={SmileIcon}></Icon>;
export const CustomColor = () => {
  return <Icon icon={SmileIcon} color="red"></Icon>
};
export const CustomSize = () => { return <Icon icon={SmileIcon} width={48} height={48} color="#ccc"></Icon> };

export const FontAwesome = () => {
  return <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
}
export const FontAwesomeColor = () => {
  return <FontAwesomeIcon icon={faCommentDots} style={{ color: "green" }}></FontAwesomeIcon>
}
export const FontAwesomeSizes = () => {
  return <div>
    <FontAwesomeIcon icon={faFolder} style={{ fontSize: "24px" }}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faStickyNote} style={{ fontSize: "48px" }}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "96px" }}></FontAwesomeIcon>
  </div>
}