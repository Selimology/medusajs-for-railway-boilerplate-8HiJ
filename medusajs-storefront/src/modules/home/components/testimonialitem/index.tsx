import { TestimonialType } from "types/testimonial"
import Rate from "../rate"

interface TestimonialProps {
  data: TestimonialType
}

const TestimonialItem: React.FC<TestimonialProps> = ({ data }) => {
  return (
    <>
      <div className="testimonial-item style-four h-full">
        <div className="testimonial-main h-full">
          <Rate currentRate={data.star} size={14} />
          <div className="text-button-uppercase text-secondary mt-4">
            Customer Reviews
          </div>
          <div className="heading4 normal-case desc font-normal mt-2">
            {data.description}
          </div>
          <div className="text-button name mt-4">{data.name}</div>
          <div className="caption2 text-secondary2 date">{data.address}</div>
        </div>
      </div>
    </>
  )
}

export default TestimonialItem
