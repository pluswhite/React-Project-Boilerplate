import React, { Component } from 'react';

import './ListSection.scss'

class ListSecion extends Component {
  render() {
    return (
      <section className="has_action">
        <a href="#" className="article_link">
          <div className="item_detail">
            <h3 className="list_title">
              Article Title.
            </h3>
            <div className="list_image">
              <ul className="clearfix">
                <li className="list_img_holder">
                  <img src="http://p1.pstatp.com/list/1bb70003a21e1117bbca" alt="img" />
                </li>
                <li className="list_img_holder">
                  <img src="http://p3.pstatp.com/list/1bbb0003a653a634b5fb" alt="img" />
                </li>
                <li className="list_img_holder">
                  <img src="http://p9.pstatp.com/list/1bba000f05f561c2644d" alt="img" />
                </li>
              </ul>
            </div>
          </div>
          <div className="item_info">
            <div>
              <span className="src">TodayFocus</span>
              <span className="cmt">
                <i className="fa fa-comment-o"></i> 6
              </span>
              <span className="time">
                <i className="fa fa-clock-o"></i> 10 mins age
              </span>
            </div>
          </div>
        </a>
      </section>
    );
  }
}

export default ListSecion;
