import React, { useState } from 'react';
import Image from 'next/image';
import ComputerWindow from '../components/general/ComputerWindowComponent';
import styles from '@/styles/sections/GetHelpSection.module.css';
import resourcesData from '@/data/resources.json';

export function DesktopContainer({ children }) {
  return <div className={`${styles.desktop}`}>{children}</div>;
}

export function MobileContainer({ children }) {
  return <div className={`${styles.mobile}`}>{children}</div>;
}

export default function GetHelpSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [containerIndex, setContainerIndex] = useState(0);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderContainer = () => {
    if (containerIndex === 0) {
      return (
        <div className={styles.mentalhContainer}>
          <div className={styles.containerHeader}>
            <button
              type="button"
              onClick={() => setContainerIndex(1)}
              className={styles.changeContainer}
            >
              <Image
                src="/assets/design-vectors/dropdown-arrow.svg"
                alt="Dropdown icon"
                width={18}
                height={18}
                className={styles.dropdownIcon}
                style={{
                  visibility: 'hidden',
                }}
              />
            </button>
            <h3>Mental Health</h3>
            <button
              type="button"
              onClick={() => setContainerIndex(1)}
              className={styles.changeContainer}
            >
              <Image
                src="/assets/design-vectors/dropdown-arrow.svg"
                alt="Dropdown icon"
                width={18}
                height={18}
                className={styles.dropdownIcon}
                style={{
                  transform: 'rotate(-90deg)',
                }}
              />
            </button>
          </div>
          {resourcesData[0].items.map((resource, index) => (
            <div key={index} className={styles.resourceItem}>
              <button
                type="button"
                onClick={() => toggleDropdown(index)}
                className={`${styles.resourceName} ${openIndex === index ? styles.open : ''}`}
              >
                {resource.name}
                <Image
                  src="/assets/design-vectors/dropdown-arrow.svg"
                  alt="Dropdown icon"
                  width={18}
                  height={18}
                  className={styles.dropdownIcon}
                />
              </button>
              {openIndex === index && (
                <div className={styles.dropdownContent}>
                  <p>{resource.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    if (containerIndex === 1) {
      return (
        <div className={styles.academicContainer}>
          <div className={styles.containerHeader}>
            <button
              type="button"
              onClick={() => setContainerIndex(0)}
              className={styles.changeContainer}
            >
              <Image
                src="/assets/design-vectors/dropdown-arrow.svg"
                alt="Dropdown icon"
                width={18}
                height={18}
                className={styles.dropdownIcon}
                style={{
                  transform: 'rotate(90deg)',
                }}
              />
            </button>
            <h3>Academic</h3>
            <button
              type="button"
              onClick={() => setContainerIndex(2)}
              className={styles.changeContainer}
            >
              <Image
                src="/assets/design-vectors/dropdown-arrow.svg"
                alt="Dropdown icon"
                width={18}
                height={18}
                className={styles.dropdownIcon}
                style={{
                  transform: 'rotate(-90deg)',
                }}
              />
            </button>
          </div>
          {resourcesData[1].items.map((resource, index) => (
            <div key={index} className={styles.resourceItem}>
              <button
                type="button"
                onClick={
                  () => toggleDropdown(index + resourcesData[0].items.length)
                  // eslint-disable-next-line react/jsx-curly-newline
                }
                className={`${styles.resourceName} ${openIndex === index + resourcesData[0].items.length ? styles.open : ''}`}
              >
                {resource.name}
                <Image
                  src="/assets/design-vectors/dropdown-arrow.svg"
                  alt="Dropdown icon"
                  width={18}
                  height={18}
                  className={styles.dropdownIcon}
                />
              </button>
              {openIndex === index + resourcesData[0].items.length && (
                <div className={styles.dropdownContent}>
                  <p>{resource.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className={styles.otherContainer}>
        <div className={styles.containerHeader}>
          <button
            type="button"
            onClick={() => setContainerIndex(1)}
            className={styles.changeContainer}
          >
            <Image
              src="/assets/design-vectors/dropdown-arrow.svg"
              alt="Dropdown icon"
              width={18}
              height={18}
              className={styles.dropdownIcon}
              style={{
                transform: 'rotate(90deg)',
              }}
            />
          </button>
          <h3>Other</h3>
          <button
            type="button"
            onClick={() => setContainerIndex(1)}
            className={styles.changeContainer}
          >
            <Image
              src="/assets/design-vectors/dropdown-arrow.svg"
              alt="Dropdown icon"
              width={18}
              height={18}
              className={styles.dropdownIcon}
              style={{
                visibility: 'hidden',
              }}
            />
          </button>
        </div>
        {resourcesData[2].items.map((resource, index) => (
          <div key={index} className={styles.resourceItem}>
            <button
              type="button"
              onClick={
                () =>
                  toggleDropdown(
                    // eslint-disable-next-line react/jsx-curly-newline
                    index +
                      resourcesData[0].items.length +
                      resourcesData[1].items.length,
                  ) // eslint-disable-next-line react/jsx-curly-newline
              }
              className={`${styles.resourceName} 
      ${openIndex === index + resourcesData[0].items.length + resourcesData[1].items.length ? styles.open : ''}`}
            >
              {resource.name}
              <Image
                src="/assets/design-vectors/dropdown-arrow.svg"
                alt="Dropdown icon"
                width={18}
                height={18}
                className={styles.dropdownIcon}
              />
            </button>
            {openIndex ===
              // eslint-disable-next-line react/jsx-indent
              index +
                resourcesData[0].items.length +
                resourcesData[1].items.length && (
              // eslint-disable-next-line react/jsx-indent
              <div className={styles.dropdownContent}>
                <p>{resource.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <DesktopContainer>
        <div className={styles.window}>
          <ComputerWindow topbarColor="wcs-pink" showButtons={false}>
            <div className={styles.container}>
              <div className={styles.mentalhContainer}>
                <h3>Mental Health</h3>
                {resourcesData[0].items.map((resource, index) => (
                  <div key={index} className={styles.resourceItem}>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(index)}
                      className={`${styles.resourceName} ${openIndex === index ? styles.open : ''}`}
                    >
                      {resource.name}
                      <Image
                        src="/assets/design-vectors/dropdown-arrow.svg"
                        alt="Dropdown icon"
                        width={18}
                        height={18}
                        className={styles.dropdownIcon}
                      />
                    </button>
                    {openIndex === index && (
                      <div className={styles.dropdownContent}>
                        <p>{resource.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.academicContainer}>
                <h3>Academic</h3>
                {resourcesData[1].items.map((resource, index) => (
                  <div key={index} className={styles.resourceItem}>
                    <button
                      type="button"
                      onClick={
                        () =>
                          toggleDropdown(index + resourcesData[0].items.length)
                        // eslint-disable-next-line react/jsx-curly-newline
                      }
                      className={`${styles.resourceName} ${openIndex === index + resourcesData[0].items.length ? styles.open : ''}`}
                    >
                      {resource.name}
                      <Image
                        src="/assets/design-vectors/dropdown-arrow.svg"
                        alt="Dropdown icon"
                        width={18}
                        height={18}
                        className={styles.dropdownIcon}
                      />
                    </button>
                    {openIndex === index + resourcesData[0].items.length && (
                      <div className={styles.dropdownContent}>
                        <p>{resource.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.otherContainer}>
                <h3>Other</h3>
                {resourcesData[2].items.map((resource, index) => (
                  <div key={index} className={styles.resourceItem}>
                    <button
                      type="button"
                      onClick={
                        () =>
                          toggleDropdown(
                            // eslint-disable-next-line react/jsx-curly-newline
                            index +
                              resourcesData[0].items.length +
                              resourcesData[1].items.length,
                          ) // eslint-disable-next-line react/jsx-curly-newline
                      }
                      className={`${styles.resourceName} 
                  ${openIndex === index + resourcesData[0].items.length + resourcesData[1].items.length ? styles.open : ''}`}
                    >
                      {resource.name}
                      <Image
                        src="/assets/design-vectors/dropdown-arrow.svg"
                        alt="Dropdown icon"
                        width={18}
                        height={18}
                        className={styles.dropdownIcon}
                      />
                    </button>
                    {openIndex ===
                      // eslint-disable-next-line react/jsx-indent
                      index +
                        resourcesData[0].items.length +
                        resourcesData[1].items.length && (
                      // eslint-disable-next-line react/jsx-indent
                      <div className={styles.dropdownContent}>
                        <p>{resource.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ComputerWindow>
        </div>
      </DesktopContainer>
      <MobileContainer>
        <div className={styles.window}>
          <ComputerWindow topbarColor="wcs-pink" showButtons={false}>
            <div className={styles.container}>{renderContainer(0)}</div>
          </ComputerWindow>
        </div>
      </MobileContainer>
    </>
  );
}
