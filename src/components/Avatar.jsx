import React from "react";
import { useSelector } from "react-redux";
import {
	Avatar as AvatarCircle,
	ListItem,
	ListItemAvatar,
	ListItemText
} from "@material-ui/core";

import getInitials from "../common/getInitials";

import { selectDisplayName } from "../redux/userSlice";

export default function Avatar() {
	const userName = useSelector(selectDisplayName);

	return (
		<ListItem>
			<ListItemAvatar>
				<AvatarCircle>{getInitials(userName)}</AvatarCircle>
			</ListItemAvatar>
			<ListItemText primary={userName} />
		</ListItem>
	);
}
