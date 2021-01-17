import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from 'react-i18next';

import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader
} from "../../store/actions";


class SidebarContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
       
    }
    
    componentDidMount() {
        this.initMenu();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
          
            if (this.props.type !== prevProps.type) {
                this.initMenu();
            }

        }
    }

    initMenu() {
            new MetisMenu("#side-menu");

            var matchingMenuItem = null;
            var ul = document.getElementById("side-menu");
            var items = ul.getElementsByTagName("a");
            for (var i = 0; i < items.length; ++i) {
                if (this.props.location.pathname === items[i].pathname) {
                    matchingMenuItem = items[i];
                    break;
                }
            }
            if (matchingMenuItem) {
                this.activateParentDropdown(matchingMenuItem);
            }
    }

    activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add("mm-active");
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");

                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add("mm-active"); // li
                    parent3.childNodes[0].classList.add("mm-active"); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add("mm-active");
                    }
                }
            }
            return false;
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
                 <div id="sidebar-menu">

                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li className="menu-title">{this.props.t('Menu')}</li>

                            <li>
                                <Link to="/dashboard" className="waves-effect">
                                    <i className="ri-dashboard-line"></i><span className="badge badge-pill badge-success float-right">3</span>
                                    <span className="ml-1">{this.props.t('Dashboard')}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/pages-commingsoon" className="has-arrow waves-effect">
                                    <i className="ri-landscape-fill"></i>
                                    <span className="ml-1">{this.props.t('MineSense')}</span>
                                </Link>
                                <ul className="sub-menu" aria-expanded="false">
                                <li>
                                <Link to="/apps-kanban-board">
                                    <i className="ri-landscape-fill"></i>
                                    <span className="ml-1">{this.props.t('PlanSense')}</span>
                                </Link>
                                </li>
                                <li>
                                <Link to="/maps-google">
                                    <i className="ri-truck-fill"></i>
                                    <span className="ml-1">{this.props.t('FleetSense')}</span>
                                </Link>
                                </li>
                                <li>
                                <Link to="/maps-google">
                                    <i className="fas fa-bomb"></i>
                                    <span className="ml-1">{this.props.t('BlastSense')}</span>
                                </Link>
                                </li>
                                <li>
                                <Link to="pages-commingsoon">
                                    <i className="ri-pie-chart-2-fill"></i>
                                    <span className="ml-1">{this.props.t('MineMetrics')}</span>
                                </Link>
                                </li>
                                <li>
                                <Link to="ui-video">
                                    <i className="ri-vidicon-2-fill"></i>
                                    <span className="ml-1">{this.props.t('MineWatch')}</span>
                                </Link>
                                </li>
                                <li>
                                <Link to="pages-commingsoon">
                                    <i className="ri-git-repository-fill"></i>
                                    <span className="ml-1">{this.props.t('ComplainceLog')}</span>
                                </Link>
                                </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="calendar" className=" waves-effect">
                                    <i className="ri-calendar-2-line"></i>
                                    <span className="ml-1">{this.props.t('Calendar')}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="apps-kanban-board" className=" waves-effect">
                                    <i className="ri-artboard-2-line"></i>
                                    <span className="ml-1">{this.props.t('Project Board')}</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/#" className="has-arrow waves-effect">
                                    <i className="ri-map-pin-line"></i>
                                    <span className="ml-1">{this.props.t('Maps')}</span>
                                </Link>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link to="maps-vector">{this.props.t('Location Maps')}</Link></li>
                                </ul>
                            </li>

                            <li className="menu-title">{this.props.t('Environment')}</li>
                            <li>
                                <Link to="/#" className="has-arrow waves-effect">
                                    <i className="fas fa-wind"></i>
                                    <span className="ml-1">{this.props.t('EnviroSense')}</span>
                                </Link>
                                <ul className="sub-menu" aria-expanded="false">
                                <li>
                                <Link to="airsense">
                                    <i className="fas fa-wind"></i>
                                    <span className="ml-1">{this.props.t('AirSense')}</span>
                                </Link>
                                </li>
                                <li>
                                <Link to="pages-commingsoon">
                                    <i className="fas fa-briefcase-medical"></i>
                                    <span className="ml-1">{this.props.t('SafetySense')}</span>
                                </Link>
                                </li>
                                <li>
                                <Link to="pages-commingsoon">
                                    <i className="ri-git-repository-fill"></i>
                                    <span className="ml-1">{this.props.t('ComplainceLog')}</span>
                                </Link>
                                </li>
                                </ul>
                            </li>

                            <li className="menu-title">{this.props.t('Profile')}</li>

                            <li>
                                <Link to="/#" className="has-arrow waves-effect">
                                    <i className="ri-mail-send-line"></i>
                                    <span className="ml-1">{this.props.t('Email')}</span>
                                </Link>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link to="email-inbox">{this.props.t('Inbox')}</Link></li>
                                    <li><Link to="email-read">{this.props.t('Read Email')}</Link></li>
                                </ul>
                            </li>

                            <li>
                                <Link to="apps-chat" className=" waves-effect">
                                    <i className="ri-chat-1-line"></i>
                                    <span className="ml-1">{this.props.t('Chat')}</span>
                                </Link>
                            </li>

                        </ul>
                    </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    return { ...state.Layout };
  };

export default withRouter(connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader
})(withNamespaces()(SidebarContent)));
