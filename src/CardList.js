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

        this.state = {
            list: [
                'test1',
                'test2',
                'test3',
                'test4',
                'test5',
                'test6',
                'test7',
                'test8',
                'test9',
                'test10',
            ],
        };
    }

    render() {
        return (
            <Wrapper>
                {this.state.list.map((item) => {
                    return (
                        <div
                            style={{
                                border: '1px solid red',
                                margin: '6px',
                                padding: '6px',
                                fontSize: '20px',
                                borderCollapse: 'collapse',
                            }}>
                            {item}
                        </div>
                    );
                })}
            </Wrapper>
        );
    }
}

CardList.propTypes = {};

export default CardList;
