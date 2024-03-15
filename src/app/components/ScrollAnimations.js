import { useScroll, motion, useSpring, useTransform } from "framer-motion"

const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ff008c", "#7700ff"]
  )

  return (
    <div>
      <motion.div
        style={{
          scaleX,
          // backgroundColor: "lightgreen",
          background,
          transformOrigin: "left",
          position: "fixed",
          top: 0,
          width: "100%",
          height: "20px",
        }}
      />
      <div
        style={{
          backgroundColor: "lightblue",
          margin: "auto",
          padding: "1.2rem",
        }}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
          expedita! Modi quo consequuntur aliquam aperiam impedit ipsa iusto
          rem? Quas ad facere optio eos eaque quidem doloribus consequatur odit
          saepe quam esse inventore dolorem placeat amet suscipit incidunt,
          tempora eveniet nobis quo qui corrupti aut doloremque veniam repellat!
          Excepturi, perspiciatis ipsum, ullam provident voluptatum numquam
          doloremque, voluptas sit eius non atque minima obcaecati. Soluta quis
          cumque dolores laudantium tempora. Inventore voluptates odit aperiam
          praesentium sed cupiditate quaerat earum magnam ipsum blanditiis!
          Illum voluptates provident adipisci in quas debitis non ducimus
          consectetur veritatis porro? Vel amet beatae quam facere quasi
          asperiores cupiditate, est quisquam, expedita excepturi aut totam
          dicta. Facere culpa incidunt a minus animi. Aut quia placeat quidem
          culpa ex fugit, ea rerum non tempore, nam suscipit eaque molestias
          quibusdam vero quam laudantium accusantium! Placeat voluptatum,
          adipisci a expedita, tenetur nam doloribus explicabo rem soluta
          sapiente sunt consectetur ullam debitis?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
          expedita! Modi quo consequuntur aliquam aperiam impedit ipsa iusto
          rem? Quas ad facere optio eos eaque quidem doloribus consequatur odit
          saepe quam esse inventore dolorem placeat amet suscipit incidunt,
          tempora eveniet nobis quo qui corrupti aut doloremque veniam repellat!
          Excepturi, perspiciatis ipsum, ullam provident voluptatum numquam
          doloremque, voluptas sit eius non atque minima obcaecati. Soluta quis
          cumque dolores laudantium tempora. Inventore voluptates odit aperiam
          praesentium sed cupiditate quaerat earum magnam ipsum blanditiis!
          Illum voluptates provident adipisci in quas debitis non ducimus
          consectetur veritatis porro? Vel amet beatae quam facere quasi
          asperiores cupiditate, est quisquam, expedita excepturi aut totam
          dicta. Facere culpa incidunt a minus animi. Aut quia placeat quidem
          culpa ex fugit, ea rerum non tempore, nam suscipit eaque molestias
          quibusdam vero quam laudantium accusantium! Placeat voluptatum,
          adipisci a expedita, tenetur nam doloribus explicabo rem soluta
          sapiente sunt consectetur ullam debitis?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
          expedita! Modi quo consequuntur aliquam aperiam impedit ipsa iusto
          rem? Quas ad facere optio eos eaque quidem doloribus consequatur odit
          saepe quam esse inventore dolorem placeat amet suscipit incidunt,
          tempora eveniet nobis quo qui corrupti aut doloremque veniam repellat!
          Excepturi, perspiciatis ipsum, ullam provident voluptatum numquam
          doloremque, voluptas sit eius non atque minima obcaecati. Soluta quis
          cumque dolores laudantium tempora. Inventore voluptates odit aperiam
          praesentium sed cupiditate quaerat earum magnam ipsum blanditiis!
          Illum voluptates provident adipisci in quas debitis non ducimus
          consectetur veritatis porro? Vel amet beatae quam facere quasi
          asperiores cupiditate, est quisquam, expedita excepturi aut totam
          dicta. Facere culpa incidunt a minus animi. Aut quia placeat quidem
          culpa ex fugit, ea rerum non tempore, nam suscipit eaque molestias
          quibusdam vero quam laudantium accusantium! Placeat voluptatum,
          adipisci a expedita, tenetur nam doloribus explicabo rem soluta
          sapiente sunt consectetur ullam debitis?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
          expedita! Modi quo consequuntur aliquam aperiam impedit ipsa iusto
          rem? Quas ad facere optio eos eaque quidem doloribus consequatur odit
          saepe quam esse inventore dolorem placeat amet suscipit incidunt,
          tempora eveniet nobis quo qui corrupti aut doloremque veniam repellat!
          Excepturi, perspiciatis ipsum, ullam provident voluptatum numquam
          doloremque, voluptas sit eius non atque minima obcaecati. Soluta quis
          cumque dolores laudantium tempora. Inventore voluptates odit aperiam
          praesentium sed cupiditate quaerat earum magnam ipsum blanditiis!
          Illum voluptates provident adipisci in quas debitis non ducimus
          consectetur veritatis porro? Vel amet beatae quam facere quasi
          asperiores cupiditate, est quisquam, expedita excepturi aut totam
          dicta. Facere culpa incidunt a minus animi. Aut quia placeat quidem
          culpa ex fugit, ea rerum non tempore, nam suscipit eaque molestias
          quibusdam vero quam laudantium accusantium! Placeat voluptatum,
          adipisci a expedita, tenetur nam doloribus explicabo rem soluta
          sapiente sunt consectetur ullam debitis?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
          expedita! Modi quo consequuntur aliquam aperiam impedit ipsa iusto
          rem? Quas ad facere optio eos eaque quidem doloribus consequatur odit
          saepe quam esse inventore dolorem placeat amet suscipit incidunt,
          tempora eveniet nobis quo qui corrupti aut doloremque veniam repellat!
          Excepturi, perspiciatis ipsum, ullam provident voluptatum numquam
          doloremque, voluptas sit eius non atque minima obcaecati. Soluta quis
          cumque dolores laudantium tempora. Inventore voluptates odit aperiam
          praesentium sed cupiditate quaerat earum magnam ipsum blanditiis!
          Illum voluptates provident adipisci in quas debitis non ducimus
          consectetur veritatis porro? Vel amet beatae quam facere quasi
          asperiores cupiditate, est quisquam, expedita excepturi aut totam
          dicta. Facere culpa incidunt a minus animi. Aut quia placeat quidem
          culpa ex fugit, ea rerum non tempore, nam suscipit eaque molestias
          quibusdam vero quam laudantium accusantium! Placeat voluptatum,
          adipisci a expedita, tenetur nam doloribus explicabo rem soluta
          sapiente sunt consectetur ullam debitis?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
          expedita! Modi quo consequuntur aliquam aperiam impedit ipsa iusto
          rem? Quas ad facere optio eos eaque quidem doloribus consequatur odit
          saepe quam esse inventore dolorem placeat amet suscipit incidunt,
          tempora eveniet nobis quo qui corrupti aut doloremque veniam repellat!
          Excepturi, perspiciatis ipsum, ullam provident voluptatum numquam
          doloremque, voluptas sit eius non atque minima obcaecati. Soluta quis
          cumque dolores laudantium tempora. Inventore voluptates odit aperiam
          praesentium sed cupiditate quaerat earum magnam ipsum blanditiis!
          Illum voluptates provident adipisci in quas debitis non ducimus
          consectetur veritatis porro? Vel amet beatae quam facere quasi
          asperiores cupiditate, est quisquam, expedita excepturi aut totam
          dicta. Facere culpa incidunt a minus animi. Aut quia placeat quidem
          culpa ex fugit, ea rerum non tempore, nam suscipit eaque molestias
          quibusdam vero quam laudantium accusantium! Placeat voluptatum,
          adipisci a expedita, tenetur nam doloribus explicabo rem soluta
          sapiente sunt consectetur ullam debitis?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
          expedita! Modi quo consequuntur aliquam aperiam impedit ipsa iusto
          rem? Quas ad facere optio eos eaque quidem doloribus consequatur odit
          saepe quam esse inventore dolorem placeat amet suscipit incidunt,
          tempora eveniet nobis quo qui corrupti aut doloremque veniam repellat!
          Excepturi, perspiciatis ipsum, ullam provident voluptatum numquam
          doloremque, voluptas sit eius non atque minima obcaecati. Soluta quis
          cumque dolores laudantium tempora. Inventore voluptates odit aperiam
          praesentium sed cupiditate quaerat earum magnam ipsum blanditiis!
          Illum voluptates provident adipisci in quas debitis non ducimus
          consectetur veritatis porro? Vel amet beatae quam facere quasi
          asperiores cupiditate, est quisquam, expedita excepturi aut totam
          dicta. Facere culpa incidunt a minus animi. Aut quia placeat quidem
          culpa ex fugit, ea rerum non tempore, nam suscipit eaque molestias
          quibusdam vero quam laudantium accusantium! Placeat voluptatum,
          adipisci a expedita, tenetur nam doloribus explicabo rem soluta
          sapiente sunt consectetur ullam debitis?
        </p>
      </div>
    </div>
  )
}

export default ScrollAnimations
