import "./App.css";

//importando o arquivo com o perfil dos usuário #Iteração 13 - Facebook
import profiles from "./data/berlin.json";

//IMPORTAR TODOS OS COMPONENTES...
import IdCard from "./components/IdCard";

function App() {
  return (
    <div>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={"1992-07-14"}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={"1988-05-11"}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      {/* O que é passado entre a tag de abertura e fechamento de um componente -> props.children */}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      {/* 
            Como criar um numero randomico entre dois valores: 
               let randomNumber = Math.random() * (max - min) + min;
         */}
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      {/* 
            Como fazer um style inline? 
               const style = {
                  background-color: rgb(red, green, blue);
               }

            Como achar um valor hex de um rgb? 
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

            let hexRed = red.toString(16)
            let hexRGreen = green.toString(16)
            let hexRed = blue.toString(16)
         */}
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {/* 
         
         
         */}
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />

      {/* 
            O que se passa entre a tag de um componente é o: children -> props.children

            SÍMBOLO DA ESTRELA CHEIA: ☆
            SÍMBOLO DA ESTRELA VAZIA: ★

         */}
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      {/* A props car é um objeto que foi escrito diretamente
         
            seria a mesma coisa que fazer uma variável

            exemplo:
            let car1 = {
               model: "Toyota Corolla Altis",
               licensePlate: "CO42DE",
            }
         */}
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE",
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER",
        }}
      />

      {/* 
               Use a array com as cores 
               let colors = ['purple','blue','green','yellow','orange','red']
               Dica: Escolhe um index de cada vez dentro da lista para fazer o botão trocar de cor
            */}
      <LikeButton />

      <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />

      {/* 
            Coloque todas as imagens importadas do dado dentro de uma array
         */}
      <Dice />
      {/* 
            a props images é uma ARRAY com várias strings dentro. 
         */}
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />

      <NumbersTable limit={12} />

      {/* Não esqueça de importar o JSON que está na pasta src/data/berling.json */}
      <FaceBook />
    </div>
  );
}

export default App;
