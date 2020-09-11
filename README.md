# stickyboard-card-list
CardList component for StickyBoard

[![Version](https://img.shields.io/npm/v/@stickyboard/card-list.svg)](https://npmjs.org/package/@stickyboard/card-list)
[![Downloads/week](https://img.shields.io/npm/dw/@stickyboard/card-list.svg)](https://npmjs.org/package/@stickyboard/card-list)
[![License](https://img.shields.io/npm/l/@stickyboard/card-list.svg)](https://github.com/soaple/@stickyboard/card-list/blob/master/package.json)

# Webpack watch
```bsh
$ npm start
```

# Build
```bsh
$ npm run build
```

# Usage example
```javascript
import React from 'react';
import { CardList } from '@stickyboard/card-list';

const cardListData = [
    {
        title: "My first card",
        description: 'This is my first card item!',
        author: 'taenykim',
        date: new Date().toISOString(),
        comment: 1,
        heart: 1,
        view: 10,
        share: 3,
        badgeText: 'N',
        badgeColor: '#fb4444',
    },
    {
        title: "My second card",
        description: 'This is my second card item!',
        author: 'soaple',
        date: new Date().toISOString(),
        comment: 1,
        heart: 1,
        view: 10,
        share: 3,
        badgeText: 'N',
        badgeColor: '#fb4444',
    },
    ...
];

function SampleCardList(props) {
    return (
        <CardList
            data={cardListData}
            title={'Sample CardList'}
            default={5}
            offset={5}
        />
    );
}
```


# License
This project is licenced under the [MIT License](http://opensource.org/licenses/mit-license.html).
