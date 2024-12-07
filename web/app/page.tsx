'use client';
import { Col } from '@/shared/ui/boxes';
import { AboutSection } from '@/view/main/about/section.about';
import { AddReviewSection } from '@/view/main/addReview/section.addreview';
import { HeadSection } from '@/view/main/head/section.head';
import { ReviewSection } from '@/view/main/review/section.review';
import { StatisticsSection } from '@/view/main/statistisc/section.statistisc';

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
