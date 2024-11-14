import prisma from "@/helpers/prismadb";

export interface ProductsParams {
  latitude?: number;
  longitude?: number;
  category?: string;
}

export default async function getProducts(params: ProductsParams) {
  try {
    const { latitude, longitude, category } = params;

    let query: any = {};

    if (category) {
      query.category = category;
    }

    if (latitude) {
      query.latitude = {
        gte: Number(latitude) - 1,
        lte: Number(latitude) + 1,
      };
    }

    if (longitude) {
      query.longitude = {
        gte: Number(longitude) - 1,
        lte: Number(longitude) + 1,
      };
    }

    const products = await prisma.product.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      data: products,
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
