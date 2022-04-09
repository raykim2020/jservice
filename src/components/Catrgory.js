export default function Category({ category }) {
    return (
        <div className="category">
            <h3 className="title">Category:</h3><h3 className="value">{category.title}</h3>

        </div>
    )
}