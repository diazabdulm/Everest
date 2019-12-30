import React from "react";
import { makeStyles, useTheme, Drawer, Hidden } from "@material-ui/core";

import { default as CustomDrawer } from "./Drawer";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0
		},
		background: theme.palette.grey.A400
	},
	drawerPaper: {
		width: drawerWidth
	}
}));

const Sidebar = ({ drawerOpen, toggleDrawer }) => {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<nav className={classes.drawer} aria-label="list holder">
			<Hidden smUp implementation="js">
				<Drawer
					variant="temporary"
					anchor={theme.direction === "rtl" ? "right" : "left"}
					open={drawerOpen}
					onClose={toggleDrawer}
					onClick={toggleDrawer}
					classes={{
						paper: classes.drawerPaper
					}}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
				>
					<CustomDrawer />
				</Drawer>
			</Hidden>
			<Hidden xsDown implementation="js">
				<Drawer
					classes={{
						paper: classes.drawerPaper
					}}
					variant="permanent"
					open
				>
					<CustomDrawer />
				</Drawer>
			</Hidden>
		</nav>
	);
};

export default Sidebar;
