import React from 'react';
import clsx from 'clsx';
import styles from './HomepageTopics.module.css';

const TopicList = [
    {
        title: 'Visual Studio Code',
        Svg: require('../../static/img/vsc-logo.svg').default,
        description: (
            <>
                Visual Studio Code is a lightweight source code editor available for Windows, macOS, and Linux. It’s a
                useful tool for editing Markdown, HTML, and other documents.
            </>
        ),
        url: '/docs/vsc'
    },
    {
        title: 'Markdown',
        Svg: require('../../static/img/markdown-logo.svg').default,
        description: (
            <>
                Markdown is a lightweight markup language that lets you create formatted text using a plain-text editor.
            </>
        ),
        url: '/docs/markdown'
    },
    {
        title: 'GitHub',
        Svg: require('../../static/img/github-logo.svg').default,
        description: (
            <>
                GitHub is a comprehensive code hosting service. It uses Git for version control and lets you collaborate
                with other users.
            </>
        ),
        url: '/docs/github/github-basics'

    },
];

function Topic({Svg, title, description, url}) {
    return (
        <div className={clsx('col col--4')}>
            <a href={url}>
                <div className="text--center">
                    <Svg className={styles.topicSvg} alt={title}/>
                </div>
            </a>
            <div className="text--center padding-horiz--md">
                <a href={url}>
                    <h3>{title}</h3>
                </a>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageTopics() {
    return (
        <section className={styles.topics}>
            <div className="container">
                <div className="row">
                    {TopicList.map((props, idx) => (
                        <Topic key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
