'use client';
import { AboutSection } from '@/sections/about/section.about';
import { AddReviewSection } from '@/sections/addReview/section.addreview';
import { HeadSection } from '@/sections/head/section.head';
import { ReviewSection } from '@/sections/review/section.review';
import { StatisticsSection } from '@/sections/statistisc/section.statistisc';
import { Col } from '@/shared/ui/boxes';

export default function Home() {
    return (
        <Col>
            <HeadSection />
            <StatisticsSection />
            <AboutSection />
            <ReviewSection />
            <AddReviewSection />
        </Col>
    );
}
