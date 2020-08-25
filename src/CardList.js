// src/CardList.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100%;
    padding: 8px;
    overflow: scroll;
`;

class CardList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    /**
     *    {
        title: '호호',
        description: '아무 설명이나 넣어볼게요',
        name: '김태은',
        date: '2020-09-13',
        comment: 5,
        like: 8,
        view: 10,
        share: 3,
        badgeColor: 'purple',
    },
     */

    render() {
        const { data, title } = this.props;
        console.log(data);
        return (
            <Wrapper>
                <div style={{ borderBottom: '1px solid black' }}>{title}</div>
                {data.map((item) => {
                    console.log(item);
                    return (
                        <div
                            style={{
                                border: '1px solid red',
                                margin: '6px',
                                padding: '6px',
                            }}>
                            <div style={{ fontSize: '16px' }}>
                                <span
                                    style={{
                                        backgroundColor: item.badgeColor,
                                        color: 'white',
                                    }}>
                                    공지
                                </span>
                                {item.title}
                            </div>
                            <div style={{ fontSize: '12px' }}>
                                {item.description}
                            </div>
                            <div>
                                <span>{item.name}</span>
                                <span>{item.date}</span>
                                <span>comment:{item.comment}</span>
                                <span>view{item.view}</span>
                                <span>share{item.share}</span>
                                <span>like{item.like}</span>
                            </div>
                        </div>
                    );
                })}
            </Wrapper>
        );
    }
}

CardList.propTypes = {};

export default CardList;
