import { DataListItem } from '../content'

type DataListProps = {
  items: DataListItem[]
}

const DataList = ({ items }: DataListProps) => (
  <dl className="flex flex-col">
    {items.map((item) => (
      <div
        key={item.key}
        className="border-book-edge flex items-baseline gap-3.5 border-b py-2.5"
      >
        <dt className="text-book-pen min-w-[96px] font-serif text-base font-semibold">
          {item.key}
        </dt>
        <dd className="text-book-slate text-[14.5px]">{item.value}</dd>
      </div>
    ))}
  </dl>
)

export { DataList }
