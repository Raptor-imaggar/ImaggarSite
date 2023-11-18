import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import servicesData from '../../../../data/servicesData';
import './mobileService.css';

const MobileService = () => {
    const [selectedCategory, setSelectedCategory] = useState('Services');
    const [selectedCollapsible, setSelectedCollapsible] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedCollapsible(null); // Reset selected Collapsible when a new category is clicked
    };

    const handleCollapsibleClick = (subtopicId) => {
        setSelectedCollapsible(subtopicId);
    };

    // Helper function to add drop-down icons
    const getCollapsibleTrigger = (title, subtopicId, isOpen) => (
        <div
            className={`collapsible-trigger ${isOpen ? 'selected' : ''}`}
            onClick={() => handleCollapsibleClick(subtopicId)}
        >
            {title}
            <span className="collapsible-icon">{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
        </div>
    );

    return (
        <div className="mobile-service-container">
            <div className="mobile-service-heading-container">
                {servicesData.topics.map((topic) => (
                    <div
                        key={topic.topicName}
                        className={`mobile-service-heading ${selectedCategory === topic.topicName ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick(topic.topicName)}
                    >
                        {topic.topicName}
                    </div>
                ))}
            </div>
            <div className="collapsible-container">
                {servicesData.topics.map((topic) => (
                    <div key={topic.topicName} style={{ display: selectedCategory === topic.topicName ? 'block' : 'none' }}>
                        {topic.subtopics.map((subtopic) => (
                            <Collapsible
                                key={subtopic.id}
                                trigger={getCollapsibleTrigger(subtopic.title, subtopic.id)}
                                triggerWhenOpen={getCollapsibleTrigger(subtopic.title, subtopic.id, true)}
                                onOpening={() => handleCollapsibleClick(subtopic.id)}
                                open={selectedCollapsible === subtopic.id}
                            >
                                <div className="collapsible-content">
                                    <div className="mobile-service-content">
                                        <div className="mobile-service-title">{subtopic.title}</div>
                                        <div className="mobile-service-subtitle">{subtopic['sub-title']}</div>
                                        <div className="mobile-service-description">{subtopic.description}</div>
                                        <a href={subtopic.link} className="mobile-service-link">
                                            <button className="mobile-service-button">Know More ..</button>
                                        </a>
                                    </div>
                                    <div className="mobile-service-image">
                                        <img src={subtopic.image} alt={subtopic.title} />
                                    </div>
                                </div>
                            </Collapsible>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileService;
