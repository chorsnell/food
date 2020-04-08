import { Factory, Seeder } from 'typeorm-seeding'
import { Connection, getConnection } from 'typeorm'
import { MockRestaurants } from '../../services/restaurants/restaurants.mocks';
import { Restaurant } from '../../services/restaurants/restaurant.interface';
import { Menu } from '../../services/menus/menus.interface';
import { MockMenus } from '../../services/menus/menus.mocks';
 
export default class CreateRestaurants implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {

    	// get entity repositories
      let restaurantRepository = connection.getRepository(Restaurant);
      let menuRepository = connection.getRepository(Menu);
      // add menu items
      const menus = [];
      for (const i in [1, 2, 3, 4]) {
          const menu = new Menu();
          menu.name = `Menu Item ${i}`;
          menu.price = Math.floor(Math.random() * 100) + 1;
          menus.push(menu);
      }
      await menuRepository.save(menus);
      
      // create new 
      let restaurant = new Restaurant();
      // add data
      restaurant = MockRestaurants[5];
      restaurant.menu = menus;
      // save to the database
      await restaurantRepository.save(restaurant);
  }
}