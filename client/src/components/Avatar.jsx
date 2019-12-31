import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Avatar as AvatarCircle,
	ListItem,
	ListItemAvatar,
	ListItemText
} from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";

import getInitials from "../common/getInitials";

import { selectDisplayName, signOut } from "../redux/userSlice";

export default function Avatar() {
	const userName = useSelector(selectDisplayName);
	const dispatch = useDispatch();

	return (
		<ListItem>
			<ListItemAvatar>
				<AvatarCircle>{getInitials(userName)}</AvatarCircle>
			</ListItemAvatar>
			<ListItemText primary={userName} />
			<ExitToApp onClick={() => dispatch(signOut())} />
		</ListItem>
	);
}
