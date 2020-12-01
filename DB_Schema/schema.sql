/* Coffee machine table */



CREATE TABLE coffee_machine
(
  "Id" varchar NULL,
  "ProductType" varchar NULL,
  "WaterLineCompatible" bool NULL,
  "ProductName" varchar NULL
);


INSERT INTO coffee_machine
  ("Id","ProductType","WaterLineCompatible","ProductName")
VALUES
  ('CM001', 'small', false, 'base model')
,
  ('CM002', 'small', false, 'premium model')
,
  ('CM003', 'small', true, 'deluxe model')
,
  ('CM101', 'large', false, 'base model')
,
  ('CM102', 'large', true, 'premium model')
,
  ('CM103', 'large', true, 'deluxe model')
,
  ('EM001', 'espresso', false, ' base model')
,
  ('EM002', 'espresso', false, 'premium model')
,
  ('EM003', 'espresso', true, 'deluxe model')
;

/******************************
*
* Coffee Pod table 
********************************/


CREATE TABLE coffee_pod
(
  "Id" varchar NULL,
  "ProductType" varchar NULL,
  "CoffeeFlavor" varchar NULL,
  "PackSize" numeric NULL
);



INSERT INTO coffee_pod
  ("Id","ProductType","CoffeeFlavor","PackSize")
VALUES
  ('CP001', 'small', 'vanilla', 1)
,
  ('CP003', 'small', 'vanilla', 3)
,
  ('CP011', 'small', 'caramel', 1)
,
  ('CP013', 'small', 'caramel', 3)
,
  ('CP021', 'small', 'psl', 1)
,
  ('CP023', 'small', 'psl', 3)
,
  ('CP031', 'small', 'mocha', 1)
,
  ('CP033', 'small', 'mocha', 3)
,
  ('CP041', 'small', 'hazelnut', 1)
,
  ('CP043', 'small', 'hazelnut', 3)
;

INSERT INTO coffee_pod
  ("Id","ProductType","CoffeeFlavor","PackSize")
VALUES
  ('CP101', 'large', 'vanilla', 1)
,
  ('CP103', 'large', 'vanilla', 3)
,
  ('CP111', 'large', 'caramel', 1)
,
  ('CP113', 'large', 'caramel', 3)
,
  ('CP121', 'large', 'psl', 1)
,
  ('CP123', 'large', 'psl', 1)
,
  ('CP131', 'large', 'mocha', 1)
,
  ('CP133', 'large', 'mocha', 3)
,
  ('CP141', 'large', 'hazelnut', 1)
,
  ('CP143', 'large', 'hazelnut', 3)
;
INSERT INTO coffee_pod
  ("Id","ProductType","CoffeeFlavor","PackSize")
VALUES
  ('EP003', 'espresso', 'vanilla', 3)
,
  ('EP005', 'espresso', 'vanilla', 5)
,
  ('EP007', ' espresso', 'vanilla', 7)
,
  ('EP013', 'espresso', 'caramel', 3)
,
  ('EP015', ' espresso', 'caramel', 5)
,
  ('EP017', 'espresso', 'caramel', 7)
;