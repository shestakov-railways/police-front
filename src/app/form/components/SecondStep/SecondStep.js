'use client'

import {
    Select,
    Textarea
} from "../../../components"
import {
    useState,
    useRef
} from "react"
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SecondStep = ({
    register,
    styles,
    errors,
    setStep,
    setValue,
}) => {
    const swiperRef = useRef();
    const [images, setImages] = useState([]);

    const handleFiles = (event) => {
        const newFiles = Array.from(event.target.files);
        const filteredNewFiles = newFiles.filter(file => file.size <= 5242880);
    
        const newUrls = filteredNewFiles.map(file => URL.createObjectURL(file));
    
        setImages(prevImages => {
            const updatedImages = [...prevImages, ...newUrls];
            
            return updatedImages.slice(0, 20);
        });
    };

    const handleRemoveImage = (indexToRemove) => {
        setImages(prevImages => prevImages.filter((_, index) => index !== indexToRemove));
    };

    return (
        <>
            <div className={styles.title}>
                Accident information
            </div>

            <div
                className={styles.back}
                onClick={() => setStep(1)}
            >
                <img
                    src="/icons/icon-chevrone-left.svg"
                    className={styles.icon}
                />
                Go back
            </div>

            <div className={styles.row}>
                <div className={styles.label}>
                    Accident type <span className={styles.required}>*</span>
                </div>
                <Select
                    name="accident_type"
                    placeholder="Accident type"
                    register={register}
                    setValue={setValue}
                    required={true}
                    className={styles.select}
                    options={[
                        {
                            value: "financial_fraud",
                            label: "Financial fraud"
                        },
                        {
                            value: "ransomware",
                            label: "Ransomware",
                        },
                        {
                            value: "identity_theft",
                            label: "Identity theft",
                        },
                        {
                            value: "property_theft",
                            label: "Intellectual property theft",
                        },
                        {
                            value: "illegal_goods_services",
                            label: "Sale of illegal goods and services",
                        }
                    ]}
                />
            </div>

            <div className={styles.row}>
                <div className={styles.label}>
                    Leave information <span className={styles.required}>*</span>
                </div>
                <Textarea
                    name="text"
                    placeholder="Enter infromation you have"
                    className={styles.textarea}
                    register={register}
                    displayErrors={true}
                    required={true}
                    errors={errors}
                />
            </div>

            <div className={styles.row}>
                <div className={styles.label}>
                    Related images (optional)
                </div>

                <div className={styles.drop_zone}>
                    <div>
                        <div className={styles.drop_zone_icon_wrapper}>
                            <img
                                src="/icons/icon-upload.svg"
                                alt=""
                                className={styles.drop_zone_icon}
                            />
                        </div>
                        <div className={styles.drop_zone_text}>
                            Upload your images here
                        </div>
                        <div className={styles.drop_zone_text}>
                            Up to 20 images, 5MB each
                        </div>
                    </div>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        className={styles.drop_zone_input}
                        onChange={handleFiles}
                    />
                </div>
            </div>

            <div className={styles.row}>
                {
                    images.length > 0
                    ?
                    <div className={styles.controls}>
                        <div
                            onClick={() => swiperRef.current?.slidePrev()}
                            className={`${styles.controller} ${styles.controller_prev}`}
                        />
                        <div
                            onClick={() => swiperRef.current?.slideNext()}
                            className={`${styles.controller} ${styles.controller_next}`}
                        />
                    </div>
                    : null
                }

                <div className={styles.slider}>
                    {
                        images.length > 0 && (
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={24}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                    },
                                }}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                {
                                    images.map((image, index) => (
                                        <SwiperSlide
                                            key={index}
                                        >
                                            <div className={styles.slide_wrapper}>
                                                <img
                                                    src={image}
                                                    alt=""
                                                    className={styles.slide_image}
                                                />

                                                <div
                                                    className={styles.remove_image_wrapper}
                                                    onClick={() => handleRemoveImage(index)}
                                                >
                                                    <img
                                                        src="/icons/icon-delete.svg"
                                                        alt=""
                                                        className={styles.remove_image}
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        )
                    }
                </div>
                
            </div>
        </>
    )
}

export default SecondStep;